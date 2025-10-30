const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-8 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h3 className="text-2xl font-bold mb-2">Shree Ram Guest House</h3>
        <p className="text-background/80 mb-4">Your Home Away From Home</p>
        <p className="text-sm text-background/60">
          © {new Date().getFullYear()} Shree Ram Guest House. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
