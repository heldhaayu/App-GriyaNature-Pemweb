import { useState, useEffect } from "react";
import Image from "next/image";

interface Product{
    id:Number,
    productname:String,
    hargabeli:Number,
    hargajual:Number,
    category:String,
    panjang:String,
    lebar:String,
    tinggi:Number,
    berat:Number,
    bahan:String,
    stok: Number,
    deskripsi: String,
    shoppelink: String,
    lazadalink:String,
    tiktokshoplink:string,
    tokpedlink:String,
    isdelete:Boolean,
    url:String,
    date:Date
}

interface editorProduct{
    product: Product
}

export default function Editor_Product(props:editorProduct) {
    console.log('ambatukam')
    const {product} =props
   const checkp = product

    
const [isNull,setIsNull] = useState(true);
const [imgChange, setImageChange] = useState(true)

console.log(String(product))

    // if ( String(checkp) != 'undefined') {
    //   setIsNull(false);
    //   console.log(isNull);
    // } else {
    //   setIsNull(true);
    //   console.log(isNull);
    // }
    
  const [productName, setProductName] = useState(String(checkp) != 'undefined' ? product[0].productname : ' ');
  const [hargabeli, setHargaBeli] = useState(String(checkp) != 'undefined' ? product[0].hargabeli : ' ');
  const [hargaJual, setHargaJual] = useState(String(checkp) != 'undefined' ? product[0].hargajual : ' ');
  const [category, setCategory] = useState(String(checkp) != 'undefined' ? product[0].category : '');
  const [panjang, setPanjang] = useState(String(checkp) != 'undefined' ? product[0].panjang : '');
  const [lebar, setLebar] = useState(String(checkp) != 'undefined' ? product[0].lebar : '');
  const [tinggi, setTinggi] = useState(String(checkp) != 'undefined' ? product[0].tinggi : '');
  const [berat, setBerat] = useState(String(checkp) != 'undefined' ? product[0].berat : '');
  const [bahan, setBahan] = useState(String(checkp) != 'undefined' ? product[0].bahan : '');
  const [stok, setStok] = useState(String(checkp) != 'undefined' ? product[0].stok : '');
  const [deskripsi, setDeskripsi] = useState(String(checkp) != 'undefined' ? product[0].deskripsi : '');
  const [shoppelink, setShoppeLink] = useState(String(checkp) != 'undefined' ? product[0].shoppelink : '');
  const [lazadalink, setLazadaLink] = useState(String(checkp) != 'undefined' ? product[0].lazadalink : '');
  const [tiktokshoplink, setTiktokShopLink] = useState(String(checkp) != 'undefined' ? product[0].tiktokshoplink : '');
  const [tokpedlink, setTokpedLink] = useState(String(checkp) != 'undefined' ? product[0].tokpedlink : '');
  const [image, setImage] = useState(String(checkp) != 'undefined' ? product[0].url : null);

  

  const handleSubmit = async (e) => {
    e.preventDefault();

    alert('aku')

    const formData = new FormData();

     formData.append("productname", productName);
    formData.append("hargaBeli", hargabeli);
    formData.append("hargaJual", hargaJual);
    formData.append("category", category);
    formData.append("panjang", panjang);
    formData.append("lebar", lebar);
    formData.append("tinggi", tinggi);
    formData.append("berat", berat);
    formData.append("bahan", bahan);
    formData.append("stok", stok);
    formData.append("deskripsi", deskripsi);
    formData.append("shoppelink", shoppelink);
    formData.append("lazadalink", lazadalink);
    formData.append("tiktokshoplink", tiktokshoplink);
    formData.append("tokpedlink", tokpedlink);

    formData.append("image", image);

    console.log(formData)

  
    try {
        if(String(checkp) != 'undefined'){
            const response = await fetch(`/api/prodImgUp/${product[0].id}`, {
                method: "PUT",
                body: formData,
              });

              alert('anjay')
        
              if (response.ok) {
                alert("Behasil Upload Product");
              } else {
                alert("Upload Product Gagal");
              }
            
        }else{
            const response = await fetch("/api/prodImgUp", {
                method: "POST",
                body: formData,
              });
        
              if (response.ok) {
                console.log("Behasil Upload Product");
              } else {
                console.error("Upload Product Gagal");
              }
        }
      
    } catch (error) {
      console.error(error);
    }
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
   setImageChange(false)
  };

  return (
    <>
      <section className="h-full overflow-y-scroll w-full bg-slate-200 md:pt-[9em]">
        <div className="block mx-auto text-center">
          <h1>Edit Produk</h1>
        </div>
        <form
          className="h-fit w-fit mx-auto flex flex-col"
          encType="multipart/form-data"
          onSubmit={(e)=>handleSubmit(e)}
        >
          <label className="" htmlFor="productname">
            Nama Produk
          </label>
          <input
            className=""
            id="productname"
            type="text"
            onChange={(e) => {setProductName(e.target.value);
            }}

            value={productName}
            
          ></input>

          <label className="" htmlFor="hargabeli">
            Harga Beli
          </label>
          <input
            className=""
            id="hargabeli"
            type="text"
            onChange={(e) => {setHargaBeli(e.target.value);
                }}
                
                value={hargabeli}
          ></input>


<label className="" htmlFor="hargajual">
            Harga Jual
          </label>
          <input
            className=""
            id="hargajual"
            type="text"
            onChange={(e) => {setHargaJual(e.target.value);
               }}
                
            value={hargaJual}
          ></input>

          <label className="" htmlFor="category">
            Category
          </label>

          <select
            name="category"
            id="category"
            onChange={(e) => {setCategory(e.target.value);
                }}
                
                
            value={ category}
          >
            <option value="hampers">Hampers</option>
            <option value="jamu bubuk">Jamu Bubuk</option>
            <option value="peralatan rumah tangga">
              peralatan rumah tangga
            </option>
          </select>

          <label className="mt-4 mb-3" htmlFor="spesifikasi">
            Spesifikasi
          </label>

          <label className="" htmlFor="panjang">
            Panjang
          </label>
          <input
            className=""
            id="panjang"
            type="number"
            onChange={(e) => {setPanjang(e.target.value);
                }}
                value={ panjang}
                
          ></input>

          <label className="" htmlFor="lebar">
            lebar
          </label>
          <input
            className=""
            id="lebar"
            type="number"
            onChange={(e) => {setLebar(e.target.value);
                }}

                value={ lebar}
                
          ></input>

          <label className="" htmlFor="tinggi">
            tinggi
          </label>
          <input
            className=""
            id="tinggi"
            type="number"
            onChange={(e) => {setTinggi(e.target.value);
            }}
            value={ tinggi}
          ></input>

          <label className="" htmlFor="berat">
            berat
          </label>
          <input
            className=""
            id="berat"
            type="number"
            onChange={(e) => {setBerat(e.target.value);
            }}
            value={berat}
          ></input>

          <label className="" htmlFor="bahan">
            bahan
          </label>
          <input
            className=""
            id="bahan"
            type="text"
            onChange={(e) => {setBahan(e.target.value);
            }}
            value={bahan}
          ></input>

          <label className="" htmlFor="stok">
            stok
          </label>
          <input
            className=""
            id="stok"
            type="number"
            onChange={(e) => {setStok(e.target.value);
            }}
            value={stok}
          ></input>

          <label className="" htmlFor="deskripsi">
            deskripsi
          </label>
          <textarea
            className=""
            id="deskripsi"
            onChange={(e) => {setDeskripsi(e.target.value)}}
            value={ deskripsi}
          ></textarea>

          <label className="" htmlFor="shoppelink">
            shoppelink
          </label>
          <input
            className=""
            id="shoppelink"
            type="text"
            onChange={(e) => {setShoppeLink(e.target.value);}}
            value={ shoppelink}
          ></input>

          <label className="" htmlFor="lazadalink">
            lazadalink
          </label>
          <input
            className=""
            id="lazadalink"
            type="text"
            onChange={(e) => {setLazadaLink(e.target.value); }}

            value={ lazadalink}
          ></input>

          <label className="" htmlFor="tiktokshoplink">
            tiktokshoplink
          </label>
          <input
            className=""
            id="tiktokshoplink"
            type="text"
            onChange={(e) => {setTiktokShopLink(e.target.value);}}
            value={ tiktokshoplink}
          ></input>

          <label className="" htmlFor="tokpedlink">
            tokpedlink
          </label>
          <input
            className=""
            id="tokpedlink"
            type="text"
            onChange={(e) => {setTokpedLink(e.target.value);}}
            value={ tokpedlink}
          ></input>
{image && (
  <Image src={imgChange ? product[0].url : URL.createObjectURL(image)} alt="Selected Image" width={200} height={200} />
)}
          <input
            htmlFor="image"
            type="file"
            id="myFile"
            name="filename"
            accept="image/*"
            onChange={handleImageChange}
          ></input>
          <input type="submit" />
        </form>
      </section>
    </>
  );
}
