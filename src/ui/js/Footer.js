const Footer = () => {
  return (
    <footer>
      <div>
        <h5>
          Designed & Developed With{" "}
          <span aria-label="emoji" role="img">
            🔥
          </span>{" "}
          By{" "}
          <a
            href="https://instagram.com/aliefseventri"
            target="_blank"
            rel="noreferrer"
          >
            @aliefseventri
          </a>
        </h5>
        <p>&copy; 2021 | Alief Dany Seventri | All Rights Reserved</p>
      </div>
      <a
        className="do-referral"
        target="_blank"
        rel="noreferrer"
        href="https://www.digitalocean.com/?refcode=f2c78bb764e7&utm_campaign=Referral_Invite&utm_medium=Referral_Program&utm_source=badge"
      >
        <img
          src="https://web-platforms.sfo2.cdn.digitaloceanspaces.com/WWW/Badge%201.svg"
          alt="DigitalOcean Referral Badge"
        />
        {/* <img
          src="https://web-platforms.sfo2.digitaloceanspaces.com/WWW/Badge%203.svg"
          alt="DigitalOcean Referral Badge"
        /> */}
      </a>
    </footer>
  );
};

export default Footer;
