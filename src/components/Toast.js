function Toast() {
  return (
    <div className="toast-container position-fixed bottom-0 end-0 p-3">
      <div
        id="taskLimitToast"
        className="toast"
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
      >
        <div className="toast-header">
          <strong className="me-auto">Task Limit</strong>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="toast"
            aria-label="Close"
          ></button>
        </div>
        <div className="toast-body">
          Weekly hour limit exceeded. Cannot add more hours.
        </div>
      </div>
    </div>
  );
}

export default Toast;
