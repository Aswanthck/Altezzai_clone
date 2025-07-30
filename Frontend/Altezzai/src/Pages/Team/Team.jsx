import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../Team/Team.css";

const Team = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://backend.altezzai.com/api/teams")
      .then((res) => {
        setUsers(res.data); 
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="home-team-preview">
      <h2>Our Team</h2>
      <div className="team-container">
        {users.map((user) => (
          <div className="team-item" key={user.id}>
            <img
              className="bgimg"
              src={`https://backend.altezzai.com/public/team_photos/${user.photo}`}
              alt={`${user.name} profile photo`}
              draggable="false"
            />
            <div className="member-detail-container">
              <div className="member-details">
                <div className="member-name">{user.name}</div>
                <div className="member-position">{user.designation}</div>
              </div>
              <a
                className="linkedin"
                href={user.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="data:image/svg+xml,%3csvg%20viewBox='0%20-2%2044%2044'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20fill='%23000000'%3e%3cg%20id='SVGRepo_bgCarrier'%20stroke-width='0'%3e%3c/g%3e%3cg%20id='SVGRepo_tracerCarrier'%20stroke-linecap='round'%20stroke-linejoin='round'%3e%3c/g%3e%3cg%20id='SVGRepo_iconCarrier'%3e%3ctitle%3eLinkedIn-color%3c/title%3e%3cdesc%3eCreated%20with%20Sketch.%3c/desc%3e%3cdefs%3e%3c/defs%3e%3cg%20id='Icons'%20stroke='none'%20stroke-width='1'%20fill='none'%20fill-rule='evenodd'%3e%3cg%20id='Color-'%20transform='translate(-702.000000,%20-265.000000)'%20fill='%232e9eb9'%3e%3cpath%20d='M746,305%20L736.2754,305%20L736.2754,290.9384%20C736.2754,287.257796%20734.754233,284.74515%20731.409219,284.74515%20C728.850659,284.74515%20727.427799,286.440738%20726.765522,288.074854%20C726.517168,288.661395%20726.555974,289.478453%20726.555974,290.295511%20L726.555974,305%20L716.921919,305%20C716.921919,305%20717.046096,280.091247%20716.921919,277.827047%20L726.555974,277.827047%20L726.555974,282.091631%20C727.125118,280.226996%20730.203669,277.565794%20735.116416,277.565794%20C741.21143,277.565794%20746,281.474355%20746,289.890824%20L746,305%20L746,305%20Z%20M707.17921,274.428187%20L707.117121,274.428187%20C704.0127,274.428187%20702,272.350964%20702,269.717936%20C702,267.033681%20704.072201,265%20707.238711,265%20C710.402634,265%20712.348071,267.028559%20712.41016,269.710252%20C712.41016,272.34328%20710.402634,274.428187%20707.17921,274.428187%20L707.17921,274.428187%20L707.17921,274.428187%20Z%20M703.109831,277.827047%20L711.685795,277.827047%20L711.685795,305%20L703.109831,305%20L703.109831,277.827047%20L703.109831,277.827047%20Z'%20id='LinkedIn'%3e%3c/path%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/svg%3e"
                  alt="LinkedIn"
                  draggable="false"
                />
              </a>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Team;
