const ErrorPage: React.FC<{ message: string }> = ({ message }) => {
  return (
    <div className="error-container">
      <h1>Error</h1>
      <img className="w-50 h-60" src="https://uxwing.com/wp-content/themes/uxwing/download/file-and-folder-type/file-error-icon.png" alt="error-icon" />
      <p>{message}</p>
    </div>
  );
};

export default ErrorPage;

