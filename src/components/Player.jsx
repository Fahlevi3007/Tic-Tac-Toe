import { useState } from "react";
import PropTypes from "prop-types";

export default function Player({
  initialName,
  symbol,
  isActive,
  onChangeName,
}) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    setIsEditing((editing) => !editing);
    if (isEditing) {
      onChangeName(symbol, playerName);
    }
  }

  function handleChange(event) {
    setPlayerName(event.target.value);
  }

  let editedPlayerName = <span className="player-name">{playerName}</span>;

  if (isEditing) {
    editedPlayerName = (
      <input type="text" required value={playerName} onChange={handleChange} />
    );
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {editedPlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}

Player.propTypes = {
  initialName: PropTypes.string.isRequired,
  symbol: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  onChangeName: PropTypes.func.isRequired, // Perubahan di sini
};
