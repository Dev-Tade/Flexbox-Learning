
function get_elements_for_property(property) {
  let property_selector = document.getElementById(property + "-selector");
  let code_text = document.getElementById(property + "-code");
  let container = document.getElementById(property + "-container");

  return [property_selector, code_text, container];
}

function container_switch_class(container, base_class, final_class) {
  container.classList.forEach(clazz => {
    if (clazz.includes(base_class + "-")) {
      container.classList.remove(clazz);
      container.classList.add(base_class + "-" + final_class);
    }
  });
}

function code_text_set_content(code_text, property, value) {
  code_text.textContent = property + ": " + value + ";";
}

function flex_direction() {
  const property = "flex-direction";
  let [property_selector, code_text, container] = get_elements_for_property(property);
  
  property_selector.addEventListener("change", () => {
    code_text_set_content(code_text, property, property_selector.value);
    container_switch_class(container, property, property_selector.value);
  });
}

function flex_wrap() {
  const property = "flex-wrap";
  let [property_selector, code_text, container] = get_elements_for_property(property);
  
  property_selector.addEventListener("change", () => {
    code_text_set_content(code_text, property, property_selector.value);
    container_switch_class(container, property, property_selector.value);
  });
}

function flex_justify_content() {
  const property = "flex-justify-content";
  let [property_selector, code_text, container] = get_elements_for_property(property);

  property_selector.addEventListener("change", () => {
    code_text_set_content(code_text, property, property_selector.value);
    container_switch_class(container, property, property_selector.value);
  });
}

function flex_align_items() {
  const property = "flex-align-items";
  let [property_selector, code_text, container] = get_elements_for_property(property);

  property_selector.addEventListener("change", () => {
    code_text_set_content(code_text, property, property_selector.value);
    container_switch_class(container, property, property_selector.value);
  });
}

function flex_align_content() {
  const property = "flex-align-content";
  let [property_selector, code_text, container] = get_elements_for_property(property);
  
  property_selector.addEventListener("change", () => {
    code_text_set_content(code_text, property, property_selector.value);
    container_switch_class(container, property, property_selector.value);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  flex_direction();
  flex_wrap();
  flex_justify_content();
  flex_align_items();
  flex_align_content();
});