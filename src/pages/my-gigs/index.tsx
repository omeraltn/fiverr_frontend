import type { FC } from "react";
import { useProfile } from "../../service.ts/auth";
import { useGetAllGigs } from "../../service.ts/gig";
import Loader from "../../components/loader";
import Error from "../../components/error";
import Card from "../../components/card";

const MyGigs: FC = () => {
  const { user } = useProfile();

  const { isLoading, error, data, refetch } = useGetAllGigs({
    userId: user?._id,
  });
  return (
    <div className="container max-md:p-5 py-5 ">
      <h1 className="title">Hizmetlerim</h1>
      <div className="">
        {isLoading ? (
          <Loader designs="my-10" />
        ) : error ? (
          <Error message={error?.message} refetch={refetch} />
        ) : (
          <div>
            {data?.length === 0 ? (
              <div className="text-center my-40">
                <p>Henüz oluşturduğunuz bir hizmet yok.</p>
              </div>
            ) : (
              data?.map((item) => <Card key={item._id} item={item} expand />)
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyGigs;
