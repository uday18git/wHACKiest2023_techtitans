import { useState } from 'react'
import { Gallery } from 'react-grid-gallery'
import {images as IMAGES} from '../../utils/dummyData'

export default function SportGallery() {
  const [images, setImages] = useState(IMAGES)
  const hasSelected = images.some((image) => image.isSelected)

  const handleSelect = (index) => {
    const nextImages = images.map((image, i) =>
      i === index ? { ...image, isSelected: !image.isSelected } : image
    )
    setImages(nextImages)
  }

  const handleSelectAllClick = () => {
    const nextImages = images.map((image) => ({
      ...image,
      isSelected: !hasSelected,
    }))
    setImages(nextImages)
  }

  return (
    <div>
      <div className="p-t-1 p-b-1">
        {/* <button onClick={handleSelectAllClick}>
          {hasSelected ? 'Clear selection' : 'Select all'}
        </button> */}
      </div>
      <Gallery images={images} />
    </div>
  )
}
