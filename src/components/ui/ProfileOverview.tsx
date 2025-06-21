interface ProfileDataType {
  username: string;
  avatar: string;
  id: number;
}

export default function ProfileOverview({ data }: ProfileDataType) {
  console.log(data);
  if (!data.length) return <p>No player selectioned yet</p>;
  return (
    <div>
      <img src={data[0].avatar} alt="avatar" />
      <p>{data[0].username}</p>
    </div>
  );
}
