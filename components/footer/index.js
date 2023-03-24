import Link from "next/link";

function Footer() {
  return (
    <footer className="flex items-center justify-center underline">
      Made with ❤️ by&nbsp;
      <Link href="https://bento.me/ofozturk" target="_blank">
        Omer Faruk Ozturk
      </Link>
    </footer>
  );
}

export default Footer;
