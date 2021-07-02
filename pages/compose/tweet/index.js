import Button from "components/Button";
import useUser from "hooks/useUser";
import { useEffect, useState } from "react";
import styles from "styles/devit.module.css";
import { addDevit, uploadImage } from "firebase/client";
import { useRouter } from "next/router";
import Head from "next/head";
import { Avatar } from "components/Avatar";

const COMPOSE_STATES = {
	USER_NOT_KNOWN: 0,
	LOADING: 1,
	SUCCES: 2,
	ERROR: -1,
};

const DRAG_IMAGE_STATES = {
	ERROR: -1,
	NONE: 0,
	DRAG_OVER: 1,
	UPLOADING: 2,
	COMPLETE: 3,
};

export default function ComposerTweets() {
	const [message, setMessage] = useState("");
	const [status, setStatus] = useState(COMPOSE_STATES.USER_NOT_KNOWN);
	const [drag, setDrag] = useState(DRAG_IMAGE_STATES.NONE);
	const [task, setTask] = useState(null);
	const [imgURL, setImgURL] = useState(null);

	const user = useUser();
	const router = useRouter();

	useEffect(() => {
		if (task) {
			const onProgress = () => {};
			const onError = () => {};
			const onComplete = () => {
				console.log("onComplete");
				task.snapshot.ref.getDownloadURL().then(setImgURL);
			};

			task.on("state_changed", onProgress, onError, onComplete);
		}
	}, [task]);

	const handleChange = (event) => {
		const { value } = event.target;
		setMessage(value);
	};

	const handleSubmit = (event) => {
		event.preventDefault(); //avoid default behavior
		setStatus(COMPOSE_STATES.LOADING);
		addDevit({
			avatar: user.avatar,
			content: message,
			userId: user.uid,
			userName: user.userName,
			image: imgURL,
		})
			.then(() => {
				router.push("/home");
			})
			.catch((err) => {
				console.error(err);
				setStatus(COMPOSE_STATES.ERROR);
			});
	};

	const handleDragEnter = (e) => {
		//console.log('enterEvent', e)
		e.preventDefault();
		setDrag(DRAG_IMAGE_STATES.DRAG_OVER);
	};

	const handleDragLeave = (e) => {
		//console.log('LeaveEvent', e)
		e.preventDefault();
		setDrag(DRAG_IMAGE_STATES.NONE);
	};

	const handleDrop = (e) => {
		e.preventDefault();
		//console.log('dropEvent', e)
		//console.log('TransferEvent', e.dataTransfer.files[0])
		setDrag(DRAG_IMAGE_STATES.NONE);
		const file = e.dataTransfer.files[0];
		const task = uploadImage(file);
		setTask(task);
	};

	const setStyleTextArea = () => {
		const style =
			drag === DRAG_IMAGE_STATES.DRAG_OVER
				? styles.textarea_dashed
				: styles.textarea;
		return style;
	};

	const isButtonDisabled = !message.length || status === COMPOSE_STATES.LOADING;

	return (
		<>
				<Head>
					<title>Crear Devit / Devter</title>
				</Head>
				<section className={styles.form_container}>
					{user && (
                    <section className={styles.avatar_container}>
                        <Avatar src={user.avatar}/>
                    </section>
                    )}
					<form onSubmit={handleSubmit} className={styles.form}>
						<textarea
							onChange={handleChange}
							onDragEnter={handleDragEnter}
							onDragLeave={handleDragLeave}
							onDrop={handleDrop}
							placeholder="¿Qué está pasando?"
							className={setStyleTextArea()}
							value={message}
						></textarea>
						{imgURL && (
							<section className={styles.remove_image}>
								<button
									className={styles.button}
									onClick={() => setImgURL(null)}
								>
									X
								</button>
								<img src={imgURL} className={styles.img} />
							</section>
						)}
						<div className={styles.div}>
							<Button disabled={isButtonDisabled}>Devitear</Button>
						</div>
					</form>
				</section>
		</>
	);
}
