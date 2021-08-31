const { DateTime } = luxon;
const SCHOOL_END = DateTime.local(2022, 7, 2);

class Counter {
    #durContElm;
    #durElm
    #gen;

    constructor(nam, gen) {
        this.#durContElm = document.createElement("span");
        const namElm = document.createElement("span");
        const sepElm = document.createElement("span");
        this.#durElm = document.createElement("span");

        this.#durContElm.className = "dur-cont";
        namElm.className = "nam";
        sepElm.className = "sep";
        this.#durElm.className = "dur";

        namElm.innerText = nam;
        sepElm.innerText = ":";
        this.#durElm.innerText = "";

        this.#durContElm.append(namElm, sepElm, this.#durElm);

        this.#gen = gen;
    }

    update() {
        this.#durElm.innerHTML = this.#gen();
    }

    get durContElm() {
        return this.#durContElm;
    }
}

const elms = [
    new Counter("Days", () => Math.floor(SCHOOL_END.diff(DateTime.now(), ["days"]).days)),
    new Counter("Hours", () => Math.floor(SCHOOL_END.diff(DateTime.now(), ["hours"]).hours)),
    new Counter("Minutes", () => Math.floor(SCHOOL_END.diff(DateTime.now(), ["minutes"]).minutes)),
    new Counter("Seconds", () => Math.floor(SCHOOL_END.diff(DateTime.now(), ["seconds"]).seconds)),
    new Counter("Tenths of a second", () => Math.floor(SCHOOL_END.diff(DateTime.now(), ["seconds"]).seconds * 10)),
    new Counter("Milliseconds", () => Math.floor(SCHOOL_END.diff(DateTime.now(), ["milliseconds"]).milliseconds)),
];

for (const elm of elms) document.body.appendChild(elm.durContElm);

setInterval(() => {
    for (const elm of elms) elm.update();
}, 10);
