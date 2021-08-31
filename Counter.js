class Counter {
    #gen;
    #durContElm;
    #namElm;
    #sepElm;
    #durElm;

    constructor(nam, gen) {
        this.#gen = gen;

        this.#durContElm = document.createElement("span");
        this.#namElm = document.createElement("span");
        this.#sepElm = document.createElement("span");
        this.#durElm = document.createElement("span");

        this.#durContElm.className = "dur-cont";
        this.#namElm.className = "nam";
        this.#sepElm.className = "sep";
        this.#durElm.className = "dur";

        this.#namElm.innerText = nam;
        this.#sepElm.innerText = ":";
        this.#durElm.innerText = "";

        this.#durContElm.append(this.#namElm, this.#sepElm, this.#durElm);
    }

    update() {
        this.#durElm.innerHTML = this.#gen();
    }

    get durContElm() {
        return this.#durContElm;
    }
}
