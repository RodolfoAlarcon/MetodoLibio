import { db } from '../firebase/firebase';
import { collection, addDoc } from 'firebase/firestore'

export default async function SendEmail() {
    const collectionRef = collection(db, 'mail');
    const emailContent = {
        to: ['ravnzl99@gmail.com'],
        message: {
            subject: 'Hello from Firebase!',
            text: 'This is the plaintext section of the email body.',
            html: 'This is the <code>HTML</code> section of the email body.',
        }
    }
    console.log('listo para ser enviado')
    await addDoc(collectionRef, emailContent)
}