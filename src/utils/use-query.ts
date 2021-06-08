import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthenticationContext } from "../providers/authentication";

export enum HTTPMethod {
  POST = "post",
  GET = "get",
}

export const useQuery = ({
  method,
  url,
  body,
  onLoad,
}: {
  method: string;
  url: string;
  body?: object;
  onLoad?: boolean;
}) => {
  const { token } = useContext(AuthenticationContext);
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);

  const options = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  const exec = async () => {
    setLoading(true);
    try {
      const response = await axios[method](
        url,
        ...(method === HTTPMethod.GET ? [options] : [body, options])
      );
      setData(response);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (onLoad) {
      exec();
    }
  }, []);

  return { exec, data, loading };
};
