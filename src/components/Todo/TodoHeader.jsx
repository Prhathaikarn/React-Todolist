import styles from './TodoHeader.module.scss'
import { getFormattedDate } from '../../utils/DateUtils';

export function TodoHeader ({title}) {

	// const now = new Date(Date.now());
    // const options = { weekday: 'short', month: 'short', day: 'numeric' };
    // // console.log(now.toLocaleDateString('en-US',options))

	return (
		<div className={styles.header}>
		<h1>{ title }</h1>
		<p>{ getFormattedDate()}</p>
	</div>
	)
}