"use strict";

import { getJSON } from "./helpers";
import loading from "url:../img/loading.svg";
import * as clearNight from "url:/img/icons/01n.png";
import * as clear from "url:/img/icons/01d.png";
import * as fewClouds from "url:/img/icons/02d.png";
import * as fewCloudsNight from "url:/img/icons/02n.png";
import * as cloud from "url:/img/icons/06d.png";
import * as cloudNight from "url:/img/icons/06n.png";
import * as rain from "url:/img/icons/12d.png";
import * as rainNight from "url:/img/icons/12n.png";
import * as rainSun from "url:/img/icons/13d.png";
import * as storm from "url:/img/icons/15d.png";
import * as stormNight from "url:/img/icons/15n.png";
import * as stormSun from "url:/img/icons/16d.png";
import * as backgroundNight from "url:/img/night.webp";
import * as backgroundDay from "url:/img/day.webp";

class WeatherApp {
    #form = document.querySelector(".nav__form");
    #parentEl = document.querySelector(".container");
    _coords;
    _country;
    _dayTime;
    _date;
    _weather;
    _temp;
    _iconSrc;

    constructor() {
        this.#parentEl.innerHTML = "";
        document.getElementById("search").focus();
        this.addHandlerCity();
    }

    clear() {
        this._city = undefined;
        this._coords = undefined;
        this._country = undefined;
        this.#parentEl.innerHTML = "";
        this._dayTime = undefined;
        this._date = undefined;
        this._weather = undefined;
        this._temp = undefined;
    }

    loadingAnimation() {
        const html = `
      <div class="spinner">
        <svg>
          <use href="${loading}#icon-loader"></use>
        </svg>
      </div>
    `;

        this.#parentEl.insertAdjacentHTML("afterbegin", html);
    }

    addHandlerCity() {
        this.#form.addEventListener("submit", (e) => {
            e.preventDefault();
            this.clear();
            this.loadingAnimation();
            this.getCityName();
        });
    }

    getCityName() {
        const searchInput = document.querySelector("#search");

        if (searchInput.value.includes(",")) {
            this._city = searchInput.value.split(",")[0].trim().toLowerCase();
            this._country = searchInput.value
                .split(",")[1]
                .trim()
                .toUpperCase();
        } else {
            this._city = searchInput.value.toLowerCase();
        }

        document.getElementById("search").value = "";
        this.getCityCoords();
    }

    async getCityCoords() {
        try {
            const data = await getJSON(
                `http://api.openweathermap.org/geo/1.0/direct?q=${this._city}&limit=5&appid=6d0850fc6b667c6f0c704ffa0c1c9eeb`
            );

            let filterCity = data.filter(
                (city) =>
                    city.name.toLowerCase() == this._city ||
                    city.state?.toLowerCase() == this._city
            );

            if (this._country) {
                filterCity = filterCity.filter(
                    (el) => el.country.toUpperCase() === this._country
                );
            } else {
                this._country = filterCity[0].country;
            }

            if (filterCity.length === 0)
                throw new Error(`${"City not found 🌍"}`);

            this._coords = [filterCity[0].lat, filterCity[0].lon];

            this.getCityWeather();
        } catch (err) {
            this.clear();
            console.error(err);
            throw err;
        }
    }

    async getCityWeather() {
        try {
            const data = await getJSON(
                `https://api.openweathermap.org/data/2.5/weather?lat=${this._coords[0]}&lon=${this._coords[1]}&appid=6d0850fc6b667c6f0c704ffa0c1c9eeb`
            );

            this._date = new Date().toLocaleDateString("en-GB");
            this._dayTime =
                data.dt >= data.sys.sunrise && data.dt <= data.sys.sunset
                    ? "day"
                    : "night";
            this._weather = data.weather[0];
            this._temp = data.main.temp - 273.15;

            console.log(data);

            this.getIconSrc();
            this.generateCard();
        } catch (err) {
            this.clear();
            console.error(err);
            throw err;
        }
    }

    getIconSrc() {
        switch (this._weather.icon.slice(0, 2)) {
            case "01":
            case "35":
                if (this._dayTime === "day") return clear;
                else {
                    return clearNight;
                }
                break;
            case "01":
            case "02":
            case "03":
            case "04":
            case "05":
            case "34":
            case "35":
            case "36":
                if (this._dayTime === "day") return fewClouds;
                else {
                    return fewCloudsNight;
                }
                break;
            case "06":
            case "07":
            case "08":
            case "09":
            case "11":
            case "37":
            case "38":
            case "50":
                if (this._dayTime === "day") return cloud;
                else {
                    return cloudNight;
                }
                break;
            case "12":
            case "10":
            case "18":
            case "39":
            case "40":
                if (this._dayTime === "day") return rain;
                else {
                    return rainNight;
                }
                break;
            case "13":
            case "14":
                return rainSun;
                break;
            case "15":
            case "41":
            case "42":
                if (this._dayTime === "day") return storm;
                else {
                    return stormNight;
                }
                break;
            case "16":
            case "17":
                if (this._dayTime === "day") return stormSun;
                break;
            default:
                return fewClouds;
        }
    }

    generateCard() {
        this.getIconSrc();
        const html = `
        <div class="card">
            <div class="card__place">
                <p class="card__city">${
                    this._city[0].toUpperCase() + this._city.substring(1)
                }</p>
                <span class="card__country">${this._country}</span>
            </div>
            <div class="card__temperature">
            <p class="card__degrees">${this._temp.toFixed(0)}</p>
            <span>°C</span>
            </div>
            <div class="card__condition">
                <img src=${this.getIconSrc()} alt="cielo" />
            </div>
            <div class="card__condition-text">${this._weather.description.toUpperCase()}</div>
        </div>      
        `;

        this.changeDesign();

        this.#parentEl.innerHTML = html;
    }

    changeDesign() {
        if (this._dayTime === "night") {
            console.log("color changed");
            document.body.style.backgroundImage = `url(${backgroundNight})`;
        } else {
            document.body.style.backgroundImage = `url(${backgroundDay})`;
        }
    }
}

// GEOCODING API
// http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid={API key}

// WEATHER API
// https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}

const generateWeather = new WeatherApp();
