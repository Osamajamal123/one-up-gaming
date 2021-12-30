import React from "react";
import "../../assets/style/biography.css";
import User1 from "../../images/men1.png";
import User2 from "../../images/men2.png";
import Trophy3 from "../../images/trophy3.png";
const Biography = () => {
  let list_container = [
    {
      id: 1,
      date: "30 October 2021",
      game: " Counter Strike: Global Offensive",
      score: " Test Tournament 5vs5",
      match: "Last Match",
      player1: "Coni",
      result: "2-0",
      player2: "Alex",
      no: "3.",
      img1: User1,
      img2: User2,
      trophy: Trophy3,
    },
    {
      id: 2,
      date: "30 October 2021",
      game: " Counter Strike: Global Offensive",
      score: " Test Tournament 5vs5",
      match: "Last Match",
      player1: "Coni",
      result: "2-0",
      player2: "Alex",
      no: "3.",
      img1: User1,
      img2: User2,
      trophy: Trophy3,
    },
    {
      id: 3,
      date: "30 October 2021",
      game: " Counter Strike: Global Offensive",
      score: " Test Tournament 5vs5",
      match: "Last Match",
      player1: "Coni",
      result: "2-0",
      player2: "Alex",
      no: "3.",
      img1: User1,
      img2: User2,
      trophy: Trophy3,
    },
    {
      id: 4,
      date: "30 October 2021",
      game: " Counter Strike: Global Offensive",
      score: " Test Tournament 5vs5",
      match: "Last Match",
      player1: "Coni",
      result: "2-0",
      player2: "Alex",
      no: "3.",
      img1: User1,
      img2: User2,
      trophy: Trophy3,
    },
    {
      id: 5,
      date: "30 October 2021",
      game: " Counter Strike: Global Offensive",
      score: " Test Tournament 5vs5",
      match: "Last Match",
      player1: "Coni",
      result: "2-0",
      player2: "Alex",
      no: "3.",
      img1: User1,
      img2: User2,
      trophy: Trophy3,
    },
  ];
  return (
    // background_color
    <div className="biography_container p-2 lg:p-6 flex justify-center">
      {/* list_container_color */}
      <div className="list_container_color p-5 rounded-xl w-full  lg:w-10/12 shadow-md">
        {/* footer_upper_text */}
        <div>
          <p className="text_color text-base underline">Last Tournaments</p>
        </div>
        {/* footer_container_data */}
        <div className="pt-4 pb-2">
          <div className="border_container overflow-x-auto lg:overflow-hidden pt-2 pb-2">
            {list_container?.map((list) => (
              <ul className="flex min-width lg:min-w-0">
                <li className="text-base border-r w-2/12 text_color text-center border_color">
                  {list.date}
                </li>
                <li className="text-base border-r w-3/12 text_color text-center border_color">
                  {list.game}
                </li>
                <li className="text-base border-r w-3/12 text_color text-center border_color">
                  {list.score}
                </li>
                <ul className="text-sm  w-4/12 text_color flex ">
                  <li className="text_color text-base pl-3">{list.match}</li>
                  <li className="px-5 pb-2">
                    {" "}
                    <img src={list.img1} alt="" className="h-8" />
                    <p className="text-center text_color text-xs py-1">
                      {list.player1}
                    </p>
                  </li>
                  <li className="text_color text-lg  pt-1">{list.result}</li>
                  <li className="px-5">
                    {" "}
                    <img src={list.img2} alt="" className="h-8" />
                    <p className="text-center text_color text-xs py-1">
                      {list.player2}
                    </p>
                  </li>
                  <ul className="flex">
                    <li className="text-lg text_color pl-4 ">{list.no}</li>
                    <li className="py-1 px-2">
                      <img src={list.trophy} alt="" className="h-5 " />
                    </li>
                  </ul>
                </ul>
              </ul>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Biography;
