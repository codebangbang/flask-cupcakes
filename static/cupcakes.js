$(".delete-cupcake").click(deletecupcake);

async function deletecupcake() {
  const id = $(this).data("id");
  await axios.delete(`/api/cupcakes/${id}`);
  $(this).parent().remove();
}
