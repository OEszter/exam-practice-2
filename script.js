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
