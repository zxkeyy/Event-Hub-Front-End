import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";
import useData from "./useData";

export interface Club {
  id: number;
  name: string;
  image: string;
}

const useClubs = () => useData<Club>('/clubs');

export default useClubs;