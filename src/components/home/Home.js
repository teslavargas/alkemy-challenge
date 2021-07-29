import React, { useState } from "react";
import styles from "./Home.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  addToMyTeam,
  getHero,
  removeFromMyTeam,
} from "../../store/actions/actions";
import { Link } from "react-router-dom";
import ErrorMsg from "../errors/ErrorMsg";

export const Home = () => {
  const [state, setState] = useState([]);
  const [show, setShow] = useState(true);
  const reduxState = useSelector((state) => state);
  const resultData =
    reduxState.heros.length > 0 ? reduxState.heros[0].results : null;
  const reduxTeam = reduxState.team;

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setState(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getHero(state));
  };

  const handleTeam = (h) => {
    if (reduxState.teamAlignment[h.biography.alignment] >= 3) {
      window.alert(
        "It's not possible to add more than 3 members of the same side."
      );
    } else {
      dispatch(addToMyTeam(h));
    }

    setShow(!show);
  };

  const handleRemove = (h) => {
    dispatch(removeFromMyTeam(h));
    setShow(!show);
  };

  return (
    <div id={styles.container} className="container mt-3">
      <h1 className={styles.home}>Home</h1>

      <Link className={styles.linkToTeam} to="/team">
        <h1>Go to my team →</h1>
        <h5>
          The team should have 6 members. There should be 3 members with good
          orientation and 3 with bad orientation.
        </h5>
      </Link>
      <div>
        <form>
          <div>
            <div className={styles.inputSearch}>
              <input
                type="text"
                placeholder="Search hero by name"
                value={state}
                onChange={handleChange}
                className="mt-3 input-group"
                autoFocus
              />
            </div>

            <div>
              <button
                onClick={handleSubmit}
                id={styles.btnSearch}
                className="btn btn-outline-primary mt-3"
              >
                Search
              </button>
            </div>
          </div>
        </form>
      </div>
      <div className={styles.cardContent}>
        {resultData === undefined ? (
          <div className={styles.containerMsg}>
            <ErrorMsg text="Character with given name not found" />
          </div>
        ) : (
          resultData?.map((h) => (
            <div key={h.id} className={styles.container}>
              <div id={styles.card} className="card">
                <img
                  className="card-img-top"
                  src={h?.image?.url}
                  alt={h?.name}
                />
                <div className="card-body">
                  <h3 className="card-title">{h?.name}</h3>
                  <h5 className="card-title">
                    Intelligence: {h?.powerstats.intelligence}
                  </h5>
                  <h5 className="card-title">
                    Strength: {h?.powerstats.strength}
                  </h5>
                  <h5 className="card-title">Speed: {h?.powerstats.speed}</h5>
                  <h5 className="card-title">
                    Durability: {h?.powerstats.durability}
                  </h5>
                  <h5 className="card-title">Power: {h?.powerstats.power}</h5>
                  <h5 className="card-title">Combat: {h?.powerstats.combat}</h5>

                  <div className={styles.btnContainer}>
                    <Link to={`/hero/${h?.id}`}>
                      <button
                        id={styles.details}
                        className="btn btn-secondary mt-3"
                      >
                        Details
                      </button>
                    </Link>

                    {reduxTeam.some((e) => e.id === h.id) ? (
                      <button
                        id={styles.detailsDanger}
                        className="btn btn-danger mt-3"
                        onClick={() => handleRemove(h)}
                      >
                        Remove hero
                      </button>
                    ) : (
                      <button
                        id={styles.details}
                        className="btn btn-secondary mt-3"
                        onClick={() => handleTeam(h)}
                      >
                        Add to my team
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
