import React from 'react';
import './_NotFoundPage.scss';
import bem from 'bem-cn';
import { Link } from 'react-router-dom';

const cn = bem('not-found');

export function NotFoundPage() {
  return (
    <div className={cn('info')}>
        Страница не найдена. Перейти на <Link to='/'>главную</Link>
    </div>
  );
}
