import React, { useEffect, useState } from "react"
import db from "../firebase"
import "./PlansScreen.css"
import { useSelector } from "react-redux"
import { selectUser } from "../features/userSlice"
import { loadStripe } from "@stripe/stripe-js"

function PlansScreen() {
  const [products, setProducts] = useState([])
  const user = useSelector(selectUser)

  useEffect(() => {
    db.collection("products")
      .where("active", "==", true)
      .get()
      .then((querySnapshot) => {
        const products = {}
        querySnapshot.forEach(async (productDoc) => {
          products[productDoc.id] = productDoc.data()
          const priceSnap = await productDoc.ref.collection("prices").get()
          priceSnap.docs.forEach((price) => {
            products[productDoc.id].prices = {
              priceId: price.id,
              priceData: price.data(),
            }
          })
        })
        setProducts(products)
      })
  }, [])
  console.log(products)

  const loadCheckout = async (priceId) => {
    const docRef = await db
      .collection("customers")
      .doc(user.uid)
      .collection("checkout_sessions")
      .add({
        price: priceId,
        success_url: window.location.origin,
        cancel_url: window.location.origin,
      })
    docRef.onSnapshot(async (snap) => {
      const { error, sessionId } = snap.data()
      if (error) {
        // Show an error to your customer and
        // inspect your Cloud Function logs in the Firebase console.
        alert(`An error occured: ${error.message}`)
      }
      if (sessionId) {
        const stripe = await loadStripe(
          "pk_test_51NAZv7Gk5DDnIERmjsGwXfWYqpCIfr4rpf3jkHDagPlFaYFM44H4nCkuy8mEZQmHWNR9PO5SH4b4wFa70cld3iLp00COkSeHig"
        )
        stripe.redirectToCheckout({ sessionId })
      }
    })
  }
  console.log(user.uid)

  return (
    <div className="PlansScreen">
      {Object.entries(products).map(([productId, productData]) => {
        return (
          <div className="PlansScreenPlan" key={productId}>
            <div className="PlansScreenInfo">
              <h5>{productData.name}</h5>
              <h6>{productData.description}</h6>
            </div>
            <button onClick={() => loadCheckout(productData.prices.priceId)}>
              Subscribe
            </button>
          </div>
        )
      })}
    </div>
  )
}

export default PlansScreen
