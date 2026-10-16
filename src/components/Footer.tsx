export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p>&copy; {new Date().getFullYear()} Product Explorer. All rights reserved.</p>
      </div>
    </footer>
  );
}
