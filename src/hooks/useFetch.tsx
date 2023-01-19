import { useEffect, useState } from "react";
import { contentfulClient } from "./useConteentful";

type Images = {
  fields: { file: { url: string } };
};

type FieldsProps = {
  description: string;
  title: string;
  profileImage: Images;
  postImage: Images;
};

export type ArticleProps = {
  fields: FieldsProps;
  sys: { id: string };
};

const useGetData = () => {
  const [data, setData] = useState<ArticleProps[]>([]);

  const fetchData = async () => {
    try {
      let client = await contentfulClient.getEntries({
        content_type: "makariosBlog",
      });

      setData(client.items);
      return client;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log("data in useHook", data);
  return { data };
};

export default useGetData;
