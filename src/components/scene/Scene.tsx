import { useEffect, useRef } from "react"
import useScene from "../../hooks/useScene";
import {BoxGeometry, Mesh, MeshBasicMaterial} from "three";
const Scene = () => {

  const mountRef = useRef<HTMLDivElement>(null)

  const {addElement, mount, dismount} = useScene()

  const geometry = new BoxGeometry(1, 1, 1)
  const material = new MeshBasicMaterial({color: 0x21345})
  const cube = new Mesh(geometry, material)

  useEffect( () => {
    mount(mountRef)
    addElement(cube)
    return () => {
      dismount()
    }
  },[])

  return(
    <div ref={mountRef} className='canvas'>
    </div>
  )
}

export default Scene