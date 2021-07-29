import React from "react";
import { connect } from "react-redux";
import { getHero } from "../../store/actions/actions";

export function SearchBar({ estadoActualForm, setEstado }) {
  function handleChange(event) {
    setEstado(event.target.value);
    console.log(event.target.value);
  }

  return (
    <div className="">
      <form className="">
        <div>
          <div className="">
            <input
              type="text"
              placeholder="Search hero by name"
              value={estadoActualForm}
              onChange={handleChange}
            ></input>
          </div>

          <div>
            <button className="btn btn-primary">Buscar</button>
          </div>
        </div>
      </form>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return { getHero: (name) => dispatch(getHero(name)) };
};

export default connect(null, mapDispatchToProps)(SearchBar);
