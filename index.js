const { DateTime } = luxon;
const SCHOOL_END = DateTime.local(2022, 7, 2);

const elms = [
    new Counter("Days", () => Math.floor(SCHOOL_END.diff(DateTime.now(), ["days"]).days)),
    new Counter("Hours", () => Math.floor(SCHOOL_END.diff(DateTime.now(), ["hours"]).hours)),
    new Counter("Minutes", () => Math.floor(SCHOOL_END.diff(DateTime.now(), ["minutes"]).minutes)),
    new Counter("Seconds", () => Math.floor(SCHOOL_END.diff(DateTime.now(), ["seconds"]).seconds)),
    new Counter("1/10 Seconds", () => Math.floor(SCHOOL_END.diff(DateTime.now(), ["seconds"]).seconds * 10)),
    new Counter("1/100 Seconds", () => Math.floor(SCHOOL_END.diff(DateTime.now(), ["seconds"]).seconds * 100)),
    new Counter("Milliseconds", () => Math.floor(SCHOOL_END.diff(DateTime.now(), ["milliseconds"]).milliseconds)),
];

for (const elm of elms) document.body.appendChild(elm.durContElm);

setInterval(() => {
    for (const elm of elms) elm.update();
}, 10);
