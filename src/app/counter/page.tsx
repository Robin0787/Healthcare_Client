"use client";

import { decrease, increase } from "@/redux/features/counter/counter-slice";
import { useGetAllSpecialtiesQuery } from "@/redux/features/specialties/specialties.api";
import { useAppDispatch } from "@/redux/hooks";
import { Button } from "@mui/material";
import { useSelector } from "react-redux";

const Counter = () => {
  const data = useGetAllSpecialtiesQuery("");
  console.log(data);
  const dispatch = useAppDispatch();
  const counter = useSelector((rootState: any) => rootState.counter.value);
  const increaseCounter = () => {
    dispatch(increase(1));
  };
  const decreaseCounter = () => {
    dispatch(decrease(1));
  };
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="w-[40%] mx-auto py-8 rounded shadow-xl">
        <h1 className="py-7 text-5xl text-center">{counter}</h1>
        <div className="flex justify-center items-center gap-5">
          <Button onClick={decreaseCounter} variant="outlined" size="large">
            --
          </Button>
          <Button onClick={increaseCounter} variant="outlined" size="large">
            ++
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
