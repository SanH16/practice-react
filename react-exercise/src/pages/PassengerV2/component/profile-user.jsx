const ProfileUser = (props) => {
  const { id, nama, umur, jenisKelamin } = props.location.state.data;
  return (
    <div>
      <div className="header">
        <h1>Info Pengunjung</h1>
        <p>
          Pengunjung bernama {nama}, dia seorang {jenisKelamin}, dan berusia {umur} tahun
        </p>
        <p> Id user : {id}</p>
        <button>Go home</button>
      </div>
    </div>
  );
};
export default ProfileUser;
