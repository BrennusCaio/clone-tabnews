function status(request, response) {
  response.status(200).json({ chave: "Em construção." });
}

export default status;
