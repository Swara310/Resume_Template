document.addEventListener("DOMContentLoaded", () => {
    const editableElements = document.querySelectorAll(".editable");
  
    editableElements.forEach(element => {
      element.addEventListener("click", () => {
        element.setAttribute("contenteditable", "true");
        element.focus();
      });
  
      element.addEventListener("blur", () => {
        element.removeAttribute("contenteditable");
      });
  
      element.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
          event.preventDefault(); // Prevent adding a newline
          element.blur(); // Save changes by blurring
        }
      });
    });
  });
  