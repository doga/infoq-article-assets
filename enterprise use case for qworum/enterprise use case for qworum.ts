// TypeScript pseudocode for an enterprise project management use case.

/**
 *  Placeholder for the Json datatype.
 *  @see {@link https://qworum.net/en/specification/v1/#json}
 */
type JsonValue = string | number | boolean | Array<JsonValue> | {} | null;

/** 
 * Interface for an HR service. Application available at the `home` end-point.
 */
interface IHumanResources {
  /**
   * Main interactive end-point. Never returns.
   * Absolute path within web origin: /home/
   * @public
   * @returns {JsonValue}
   */
  home: () => JsonValue;

  /**
   * Interactive end-point that returns a list of employees that the end-user finalizes interactively.
   * Absolute path within web origin: /choose-employees/
   * @public
   * @param {JsonValue} pattern - Matching criteria for employees.
   * @returns {JsonValue}
   */
  chooseEmployees: (pattern: JsonValue) => JsonValue;
}


/** 
 * Interface for a room booking service.
 */
interface IRooms {
  /**
   * Interactive end-point for booking a room in the company buildings.
   * Absolute path within web origin: /book-room/
   * @public
   * @param {JsonValue} pattern - Matching criteria for rooms.
   * @returns {JsonValue}
   */
  bookRoom: (pattern: JsonValue) => JsonValue;
}


interface ICollaborationSoftware { /* ... */ }


/** 
 * Interface for a project management service. Application available at the `home` end-point.
 */
interface IProjectManager {
  /** 
   * Metadata about the projects that the end-user is involved in. 
   * @private
   */
  projects: JsonValue;

  /** 
   * Remote service for adding employees to the project.
   * @private
   */
  hr: IHumanResources;

  /** 
   * Remote service for booking physical rooms.
   * @private
   */
  rooms: IRooms;

  /** 
   * Remote online collaboration service.
   * @private
   */
  collaborationSoftware: ICollaborationSoftware;

  /**
   * Main interactive end-point. Never returns.
   * Absolute path within web origin: /home/
   * @public
   * @returns {JsonValue}
   */
  home: () => JsonValue;
}

