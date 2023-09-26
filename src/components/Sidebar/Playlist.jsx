function Playlists() {
  return (
    <nav
      className="mx-6 mt-2 py-2 flex-auto border-t border-white border-opacity-20 overflow-y-auto"
      style={{
        maxHeight: "350px",
      }}
    >
      <style>
        {`
          /* Kaydırma çubuğu için özel stiller */
          ::-webkit-scrollbar {
            width: 5px; /* Kaydırma çubuğu genişliği */
          }

          ::-webkit-scrollbar-thumb {
            background-color: #666; /* Kaydırma çubuğu rengi */
            border-radius: 4px; /* Kenar yuvarlaklığı */
          }

          ::-webkit-scrollbar-thumb:hover {
            background-color: #888; /* Kaydırma çubuğu üzerine gelindiğindeki rengi */
          }
        `}
      </style>

      <ul>
        {new Array(40).fill(
          <li>
            <a
              href="#"
              className="text-s text-link hover:text-white flex h-8 items-center"
            >
              22. Çalma Listem
            </a>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Playlists;
