export interface AddProjectToWishlistProps {
  onAddToWishlist: () => void
  onRequestClose: () => void
}

export function AddProjectToWishlist({
  onAddToWishlist,
  onRequestClose,
}: AddProjectToWishlistProps) {
  return (
    <span>
      Deseja adicionar aos favoritos?
      <button onClick={onAddToWishlist}>Sim</button>
      <button onClick={onRequestClose}>Não</button>
    </span>
  )
}
