import { IError } from "@pages/error/model/types";

import styles from "./error.module.scss";

export const ErrorPage = ({ errorText }: IError) => {
	return <h1 className={styles.title}>Error {errorText}</h1>;
};
