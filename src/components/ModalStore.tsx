interface ModalProps {
  open: boolean
  onClose: () => void
  children: React.ReactNode
}

function ModalStore ({ open, onClose, children }: ModalProps) {
  return (
    <div
      className={`fixed z-50 inset-0 flex justify-center items-center transition-colors ${
        open ? 'bg-black bg-opacity-50' : 'invisible'
      }`}
      onClick={onClose}
    >
      <div
        className={`bg-white rounded-lg shadow p-6 transition-all max-w-2xl ${
          open ? 'scale-100 opacity-100' : 'scale-110 opacity-0'
        }`}
        onClick={e => {
          e.stopPropagation()
        }}
      >
        <button onClick={onClose}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6 absolute top-4 right-4 cursor-pointer hover:text-red-500 duration-200'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M6 18L18 6M6 6l12 12'
            />
          </svg>
        </button>
        {children}
      </div>
    </div>
  )
}
export default ModalStore
