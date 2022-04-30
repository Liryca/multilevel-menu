# How To Run:
- 1) json-server HelpTOC.json --watch --port 3001- 2) npm start

# Task Description:

## Требования:
  - Использовать актуальную версию библиотеки React для реализации логики и представления.
  - Для написания стилей желательно использовать PostCSS, LESS/SASS, CSS-модули или CSS-in-JS библиотеку.
  - Нельзя использовать специализированные библиотеки для построения оглавления и деревьев, но можно использовать вспомогательные (для  управления состоянием, анимации и т.п.)
  - Данные в JSON должны загружаться асинхронно из локального веб-сервера.
  - Пока пункты оглавления не отрисованы, пользователь должен видеть “заглушку” из дизайн-макета.
  - При клике на корневой элемент ветки или на стрелку рядом с ним, вложенный список должен сворачиваться/разворачиваться.
  - Сделать плавные анимации для смены цветов и изменения положения иконки.

### Будет плюсом, если вы реализуете:

JS API
  - выбор активного пункта по ID
  - фильтрация пунктов по строке текста
  - фильтрацию при вводе текста в элемент input (нет в дизайне)
  - вывод результатов должен происходить не на каждое нажатие клавиши, а после прекращения набора
  - во время ожидания отрисовки можно показать индикатор загрузки
  - анимацию разворачивания/сворачивания ветки

  Результат разработки с локальными коммитами разработчика опубликовать в репозитории и прислать на него ссылку. Напишите инструкцию по запуску проекта в файле README.md в корне проекта.

## Дополнительные пояснения:
  Формат данных оглавления:
  
    entities – все элементы дерева, разделённые по типу
  
    pages – страницы
      id – уникальный идентификатор пункта
      title – заголовок страницы, используется в качестве текста для ссылки в оглавлении
      url – относительный путь к странице, это href для ссылки
      level – уровень вложенности пункта относительно корня дерева, в зависимости от  него ставится внутренний отступ в ноде
      parentId – указатель на идентификатор родителя, во вложенном списке которого нужно отрисовать пункт
      pages – список идентификаторов вложенных страниц
      anchors – список идентификаторов якорей, которые нужно отрисовать при активации пункта
      tabIndex – игнорируем
      disqus_id – игнорируем
  
    anchors – якоря, они отрисовываются только после выбора страницы, к которой относятся
      id – уникальный идентификатор пункта
      title – заголовок якоря, используется в качестве текста для ссылки
      url – адрес страницы, на которой находится якорь
      anchor – сам якорь в формате `#anchor-name`, из url и anchor формируется href для ссылки
      level – уровень вложенности пункта относительно корня дерева, в зависимости от  него ставится внутренний отступ в ноде
      disqus_id – игнорируем
    
    topLevelIds – список идентификаторов пунктов первого уровня
  
## Дизайн: 
  - Сделайте простой шаблон страницы, чтобы оглавление оказалось слева, как показано в макете. Шапку, футер и контент реализовывать не нужно. В макете есть гайд по поведению меню при выборе пункта, наведению и т.п.
  - Якоря (anchors) отрисовываются только при активации пункта оглавления страницы, к которой они относятся, при этом вся ветка выделяется серым фоном.
