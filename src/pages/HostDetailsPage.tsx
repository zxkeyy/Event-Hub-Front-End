import { useParams } from "react-router-dom";
import useClub from "../hookers/useClub";
import { Box } from "@chakra-ui/react";

const HostDetailsPage = () => {
  const { id } = useParams();
  const { data: host, isLoading, error } = useClub(parseInt(id!));

  if (isLoading) return null;
  if (error) throw error;
  if (!host) return null;

  return <Box>{host.name}</Box>;
};

export default HostDetailsPage;
