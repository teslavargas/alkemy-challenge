import React, { useState, useEffect } from "react";
import styles from "./Team.module.css";
import { Link, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { removeFromMyTeam } from "../../store/actions/actions";

const Team = () => {
  const dispatch = useDispatch();
  var history = useHistory();
  const reduxState = useSelector((state) => state);
  const reduxTeam = reduxState.team;
  const resultTeam = reduxState.team;

  const [show, setShow] = useState(true);

  const [stats, setStats] = useState({
    intelligence: 0,
    strength: 0,
    speed: 0,
    durability: 0,
    power: 0,
    combat: 0,
    weight: 0,
    height: 0,
  });

  const handleRemove = (h) => {
    dispatch(removeFromMyTeam(h));
    setShow(!show);
  };

  if (resultTeam.length < 1) {
    window.alert("To see your team you must first create it.");
    history.push("/home");
  }

  useEffect(() => {
    var resultStats = resultTeam.reduce(
      (acc, item) => {
        for (const [attrName, attrValue] of Object.entries(item.powerstats)) {
          if (!acc[attrName]) {
            acc[attrName] = 0;
          }

          acc[attrName] += attrValue === "null" ? 0 : parseInt(attrValue);
        }
        acc["weight"] += parseInt(item.appearance.weight[1].split(" ")[0]);
        acc["height"] += parseInt(item.appearance.height[1].split(" ")[0]);
        return acc;
      },
      { weight: 0, height: 0 }
    );

    let sortStats = Object.fromEntries(
      Object.entries(resultStats).sort(([, a], [, b]) => b - a)
    );
    setStats(sortStats);
  }, [resultTeam]);

  return (
    <div className="container mt-3">
      <h1>My team</h1>
      <button className="btn btn-secondary" onClick={() => history.goBack()}>
        ← Go back
      </button>

      <div className={styles.dataContainer}>
        <div className={styles.powerContainer}>
          <h3>Powerstats</h3>
          <div className={styles.stats}>
            {Object.entries(stats)
              .filter(([key]) => key !== "weight" && key !== "height")
              .map(([key, value]) => {
                return (
                  <h4>
                    {key[0].toUpperCase() + key.slice(1)}: {value}{" "}
                  </h4>
                );
              })}
          </div>
        </div>

        <div className={styles.powerContainer}>
          <h3>Average</h3>
          <div className={styles.stats}>
            <h4>Weight: {Math.round(stats?.weight / resultTeam.length)} kg</h4>
            <h4>Height: {Math.round(stats?.height / resultTeam.length)} cm</h4>
          </div>
        </div>
      </div>

      <div className={styles.container}>
        {resultTeam?.map((h) => (
          <div key={h.id} className={styles.card}>
            <div className={styles.cardBody}>
              <img src={h?.image?.url} alt={h?.name} />
              <div className={styles.cardContent}>
                <h3>{h?.name}</h3>
                <div>
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
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
