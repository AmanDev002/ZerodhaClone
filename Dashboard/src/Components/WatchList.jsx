import React, { useState, useContext } from "react";
import { watchlist } from "../data/data";
import { Tooltip, Grow } from "@mui/material";

import GeneralContext from "./GeneralContext";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import PollIcon from "@mui/icons-material/Poll";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

const WatchList = () => {
  return (
    <div className="watchlist-container">
      <div className="search-container">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
          className="search"
        />
        <span className="counts">{watchlist.length}/50</span>
      </div>

      <ul className="list">
        {watchlist.map((stock, index) => (
          <WatchListItem stock={stock} key={index}></WatchListItem>
        ))}
      </ul>
    </div>
  );
};

export default WatchList;

const WatchListItem = ({ stock, index }) => {
  const [showWatchList, setShowWatchList] = useState(false);

  const onMouseEnter = () => {
    setShowWatchList(true);
  };

  const onMouseLeave = () => {
    setShowWatchList(false);
  };

  return (
    <li onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <div className="item">
        <p className={stock.isDown ? "down" : "up"}>{stock.name}</p>
        <div className="itemInfo">
          <span className="percent">{stock.percent}</span>
          {stock.isDown ? (
            <KeyboardArrowDownIcon className="down"></KeyboardArrowDownIcon>
          ) : (
            <KeyboardArrowUpIcon className="up"></KeyboardArrowUpIcon>
          )}
          <span className="price">₹{stock.price}</span>
        </div>
      </div>
      {showWatchList && <WatchListActions uid={stock.name}></WatchListActions>}
    </li>
  );
};

const WatchListActions = ({ uid }) => {
  const generalContext = useContext(GeneralContext);
  const handleBuyClick = () => {
    generalContext.openBuyWindow(uid);
  };
  return (
    <>
      <span className="actions">
        <Tooltip
          title="Buy (B)"
          placement="top"
          arrow
          TransitionComponents={Grow}
          onClick={handleBuyClick}
        >
          <button className="buy">Buy</button>
        </Tooltip>
        <Tooltip
          title="Sell (S)"
          placement="top"
          arrow
          TransitionComponents={Grow}
        >
          <button className="sell">Sell</button>
        </Tooltip>
        <Tooltip
          title="Analytics (A)"
          placement="top"
          arrow
          TransitionComponents={Grow}
        >
          <button className="action">
            <PollIcon className="icon"></PollIcon>
          </button>
        </Tooltip>
        <Tooltip title="More" placement="top" arrow TransitionComponents={Grow}>
          <button className="action">
            <MoreHorizIcon className="icon"></MoreHorizIcon>
          </button>
        </Tooltip>
      </span>
    </>
  );
};
