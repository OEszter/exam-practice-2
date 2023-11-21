document.querySelector("#root").insertAdjacentHTML("beforeend", `
    <form>
      <h1>Register your pet!</h1>

      <input type="text" placeholder="pet name">

      <textarea placeholder="symptoms..."></textarea>

      <button>submit</button>

      <div>
        <input type="checkbox">
        <p>Elolvastem és elfogadom a felhasználási feltételeket</p>
      </div>
    </form>

    <div>?</div>
`)

/* A 11-14. sor azért van külön div-ben, hogy meg tudjam oldani, hogy egymás mellé kerüljenek, és ne alá-fölé a flex miatt */
