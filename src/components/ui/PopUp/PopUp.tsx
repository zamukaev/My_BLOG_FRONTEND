import { FC } from "react";
import { Button } from "@mui/material";

import classNames from "classnames";

import styles from "./PopUp.module.scss";

interface PopUpProps {
	isActive: boolean;
	onCancelHandler?: () => void;
	onDeleteHandler?: (event: any) => void;
	error?: string | null;
}

const PopUp: FC<PopUpProps> = ({ isActive, onCancelHandler, onDeleteHandler, error }) => {

	return (
		<div className={classNames(styles.popup, { [styles.active]: isActive })}>
			<h3 className={styles.title}>{error ? error : "wollen Sie wircklig das Post löschen???"}</h3>
			{!error && <div className={styles.buttons}>
				<Button onClick={onDeleteHandler} variant="contained">Ja</Button>
				<Button onClick={onCancelHandler} variant="contained" color="error">Abrechen</Button>
			</div>}
		</div>
	);
}

export default PopUp;