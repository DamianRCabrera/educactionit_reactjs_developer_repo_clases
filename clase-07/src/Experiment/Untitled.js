function ParentComponent(props = {}) {
  const text = "Un texto en la funcion";

  function childComponent(props = {}) {
    console.log(text);
  }

  childComponent();
}

ParentComponent();
