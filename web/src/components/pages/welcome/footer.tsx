export const WelcomeFooter = () => {
  return (
    <footer className="my-20">
      <p className="text-center text-sm text-slate-500">
        Copyright © {new Date().getFullYear()} Astroship. All rights reserved.
      </p>

      <p className="text-center text-xs text-slate-500 mt-1">
        Made by{" "}
        <a
          href="https://web3templates.com"
          target="_blank"
          rel="noopener"
          className="hover:underline"
        >
          Web3Templates
        </a>
      </p>
    </footer>
  );
};
