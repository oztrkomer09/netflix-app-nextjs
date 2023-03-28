import Link from "next/link";

function Footer() {
  return (
    <footer className="flex items-center justify-center underline py-10 absolute bottom-0 left-1/2 -translate-x-1/2">
      Made with ❤️ by&nbsp;
      <Link href="https://bento.me/ofozturk" target="_blank">
        Omer Faruk Ozturk
      </Link>
    </footer>
  );
}

export default Footer;
