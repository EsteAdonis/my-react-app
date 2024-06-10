
function ProfilePicture() {
  const imageUrl = "https://w0.peakpx.com/wallpaper/210/1018/HD-wallpaper-vanessa-kirby-english-stage-t-v-film-actress-the-crown-mission-impossible-fallout.jpg";

  const handleClick = (e) => e.target.style.display = "none";

  return (<img onClick={(e) => handleClick(e)} src={imageUrl} width="200px"></img>);

}

export default ProfilePicture