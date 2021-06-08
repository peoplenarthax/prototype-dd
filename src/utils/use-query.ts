import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthenticationContext } from "../module/authentication/providers/authentication";
import { getMockData } from "./data-mocks";

export enum HTTPMethod {
  POST = "post",
  GET = "get",
}

export const useQuery = ({
  method,
  url,
  body,
  onLoad,
  decorator,
}: {
  method: string;
  url: string;
  body?: object;
  onLoad?: boolean;
  decorator?: Function;
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
      const response = process.env.AUTHENTICATION_DISABLED
        ? await getMockData(method, url)
        : await axios[method](
            url,
            ...(method === HTTPMethod.GET ? [options] : [body, options])
          );

      setData(decorator ? decorator(response) : response);
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
