import { postdata } from "./store";
import { useDispatch } from "react-redux";
import React from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
export default function AddItem() {
  const dispatch = useDispatch();
  let { id } = useParams();

  const navigate = useNavigate();
  const names = React.useRef();
  const Descraption = React.useRef();
  const range = React.useRef();

  React.useEffect(async () => {
    const { data } = await axios.get(`http://127.0.0.1:8000/shoping/${id}`);

    console.log(data,"here data");
  }, []);

  return (
    <>
      <div class="w-[80%]  m-auto  mt-[100px]">

        <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="name"
            >
              title
            </label>
            <input
              name="name"
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="title"
            />
          </div>
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="description"
            >
              description
            </label>
            <input
              name="description"
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="description"
              type="text"
              placeholder="description"
            />
          </div>
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="range"
            >
              range
            </label>
            <input
              id="range"
              name="range"
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
            />
          </div>
          <input className="bg-blue-500 p-2 text-white" type="submit" />
        </form>
      </div>
    </>
  );
}
